export const FirebaseErrorMessage = (error) => {
    let errorMessageText = error.message.split("auth/")[1]?.split(")")[0]?.split("-")?.join(" ")
    const message = errorMessageText?.charAt(0)?.toUpperCase() + errorMessageText?.slice(1) || 'Something went wrong, please try again later'
    return message;
}