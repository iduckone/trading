interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div>
    <h2>{children}</h2>
  </div>;
};

