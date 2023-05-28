export default function ContentPart() {

  const handleNameChange = () => {
    const names = ['Bob', 'Davin', 'Kave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
}
