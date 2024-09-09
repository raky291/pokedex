import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function I18nClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
