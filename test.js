function gradeWebsite() {
    const url = document.getElementById('websiteUrl').value.trim();
    const resultDiv = document.getElementById('result');

    if (!url) {
      resultDiv.innerHTML = 'Please enter a valid URL!';
      return;
    }

    // Simulate criteria evaluation (customize as needed)
    let grade = 'C';
    if (url.includes('secure') || url.startsWith('https')) {
      grade = 'A';
    } else if (url.includes('fast')) {
      grade = 'B';
    }

    else if(url.include){
      grade
    }

    // Display result
    resultDiv.innerHTML = `The website <strong>${url}</strong> is graded: <span class="grade">${grade}</span>`;
  }