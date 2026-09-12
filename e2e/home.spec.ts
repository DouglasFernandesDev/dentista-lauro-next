import { expect, test } from "@playwright/test";

test.describe("Página inicial — Dr. Lauro Santos", () => {
  test("carrega com título e headline do hero", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Dr\. Lauro Santos/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Transforme seu sorriso sem perder a naturalidade/i,
      }),
    ).toBeVisible();
  });

  test("navegação âncora leva à seção Sobre", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Sobre" })
      .click();

    await expect(page).toHaveURL(/#sobre$/);
    await expect(
      page.getByRole("heading", { name: /elas revelam o sorriso que já é seu/i }),
    ).toBeInViewport();
  });

  test("menu mobile abre e fecha ao escolher um link", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Abrir menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(
      page.getByRole("button", { name: "Fechar menu" }),
    ).toHaveAttribute("aria-expanded", "true");

    const trabalhosLink = page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Trabalhos" });
    await expect(trabalhosLink).toBeVisible();
    await trabalhosLink.click();

    await expect(page.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  test("CTA principal aponta para o WhatsApp em nova aba", async ({ page }) => {
    await page.goto("/");

    const ctaSection = page.getByRole("region", { name: "Vamos planejar o seu sorriso?" });
    const cta = ctaSection.getByRole("link", { name: /Agendar avaliação/i });
    await expect(cta).toHaveAttribute("href", "https://wa.me/5522998277917");
    await expect(cta).toHaveAttribute("target", "_blank");
    await expect(cta).toHaveAttribute("rel", /noopener/);
  });

  test("hero tem CTA de agendamento e o botão flutuante de WhatsApp existe", async ({
    page,
  }) => {
    await page.goto("/");

    const heroSection = page.getByRole("region", { name: /Transforme seu sorriso/i });
    await expect(
      heroSection.getByRole("link", { name: /Agendar avaliação/i }),
    ).toHaveAttribute("href", "https://wa.me/5522998277917");

    await expect(
      page.getByRole("link", { name: /Falar no WhatsApp/i }),
    ).toHaveAttribute("href", "https://wa.me/5522998277917");
  });

  test("comparador antes/depois alterna ao clicar", async ({ page }) => {
    await page.goto("/");

    const trabalhos = page.getByRole("region", {
      name: "Antes e depois: cada caso, um planejamento próprio.",
    });
    const compareButton = trabalhos.getByRole("button").first();
    await expect(compareButton).toHaveAttribute("aria-pressed", "false");

    await expect(compareButton).toBeVisible();
    await compareButton.click();
    await expect(compareButton).toHaveAttribute("aria-pressed", "true");

    await compareButton.click();
    await expect(compareButton).toHaveAttribute("aria-pressed", "false");
  });

  test("seção de contato lista os canais principais", async ({ page }) => {
    await page.goto("/");

    const contato = page.getByRole("region", { name: "Fale comigo e agende seu horário." });
    await expect(contato.getByRole("link", { name: /Instagram/ })).toBeVisible();
    await expect(contato.getByRole("link", { name: /E-mail/ })).toHaveAttribute(
      "href",
      /^mailto:/,
    );
    await expect(contato.getByRole("link", { name: /Localização/ })).toBeVisible();
  });
});
