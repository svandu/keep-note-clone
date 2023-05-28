export default function Footer() {

    const today = new Date();
  return (
    <Footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </Footer>
  )
}
