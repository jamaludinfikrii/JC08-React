export const fnUbahUser = (nama) => {
    return {
        type : 'UBAH_USER', // type
        payload : nama      // payload = sesuatu yang dikirimi
    }
}

