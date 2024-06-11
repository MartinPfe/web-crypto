
export const getGoogleDriveFiles = async (accessToken: string) => {
    try {

      console.log(accessToken)
      const response = await fetch('https://www.googleapis.com/drive/v3/files', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return data.files;
    } catch (error) {
      console.error('Error fetching Google Drive files:', error);
      return null;
    }
  };