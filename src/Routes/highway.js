
function SubmitButton({ onSubmit }) {
  const handleSubmit = () => {
    const data = {
      selectedAge: selectedAge,
      selectedProduct: selectedProduct
    };

    fetch('your-endpoint-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  };

}

export default SubmitButton;


