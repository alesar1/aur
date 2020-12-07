# Maintainer: Lumaku <lumaku@mailbox.org>
pkgname=python-espnet-git
pkgver=0.9.6.r10069
pkgrel=1
pkgdesc='End-to-End Speech Processing Toolkit Python-Only Package (without venv)'
arch=('any')
url='https://github.com/espnet/espnet'
license=('Apache 2.0')
depends=('python>=3.7' 'python-numpy' 'python-soundfile' 'python-typeguard' 'python-editdistance' 'python-librosa' 'tensorboard' 'python-h5py' 'python-nltk' 'python-regex' 'python-inflect' 'python-jaconv' 'python-pytorch-complex' 'python-pytorch-wpe' 'python-sentencepiece' 'python-g2p-git' 'python-kaldiio' 'python-sentencepiece-git' 'python-wandb')
optdepends=('sox: convert audio files')
makedepends=('git' 'python-setuptools')
provides=('python-espnet')
conflicts=("python-espnet" "${pkgname}")
source=(
    "${pkgname}::git+${url}")
md5sums=(
    'SKIP')


pkgver() {
    cd "${pkgname}"
    printf "%s.r%s" "$(python setup.py --version)" "$(git rev-list --count HEAD)"
}


build() {
    cd "${pkgname}"
}


package() {
    cd "${pkgname}"
    export PYTHONHASHSEED=0
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

