export default function Footer({ dict }: { dict: any }) {
  const date = new Date();

  return (
    <div>
      <p>&copy; Logo Company {date.getFullYear()}</p>
      <p>{dict.footer.allRights}</p>
    </div>
  );
}
