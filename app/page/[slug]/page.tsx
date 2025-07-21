import PageContent from "@/components/layout/PageContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <PageContent id={id} />;
}
