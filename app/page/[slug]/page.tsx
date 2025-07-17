import PageContent from '@/components/layout/PageContent';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <PageContent slug={slug} />;
}