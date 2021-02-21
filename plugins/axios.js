export default function ({ $axios }) {
    $axios.onError((error) => {
        console.log('что-то пошло не так', error)
    });
}
