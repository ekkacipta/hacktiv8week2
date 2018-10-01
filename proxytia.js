var nama = ''
var peran = '' 
if (nama === '') {
    alert('Nama harus diisi!');
} else if ( peran === ''){
    alert('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
} else if ( peran === 'ksatria'){
    alert('Selamat datang di Dunia Proxytia ' + nama)
    alert('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if ( peran === 'tabib'){
    alert ('Selamat datang di Dunia Proxytia ' + nama)
    alert ('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
} else if ( peran === 'penyihir'){
    alert ('Selamat datang di Dunia Proxytia ' + nama)
    alert ('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}