# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

_srcname=vmaf
_sureal_commit='392bb9b49441e60162e48f656648cdf601ded5f9'

pkgname=python2-vmaf
pkgver=1.3.4
pkgrel=1
pkgdesc='Perceptual video quality assessment algorithm based on multi-method fusion (python2 implementation)'
arch=('any')
url='https://github.com/netflix/vmaf/'
license=('APACHE')
depends=(
    # official repositories:
        'python2' 'python2-numpy' 'python2-scipy' 'python2-matplotlib'
        'python2-pandas' 'python2-scikit-learn' 'python2-h5py'
    # AUR:
        'libsvm'
)
makedepends=('python2' 'python2-setuptools')
conflicts=('python2-vmaf-git')
source=("${_srcname}-${pkgver}.tar.gz"::"https://github.com/Netflix/${_srcname}/archive/v${pkgver}.tar.gz"
        'vmaf-submodule-sureal'::"git+https://github.com/Netflix/sureal.git#commit=${_sureal_commit}")
sha256sums=('9530d341df8df4104c9d8bd656335a8d79ff61c19e77bb720deb359a40ac26f7'
            'SKIP')

prepare() {
    cd "${_srcname}-${pkgver}"
    
    rm -rf sureal
    ln -sf "${srcdir}/vmaf-submodule-sureal" sureal
}

build() {
    msg2 'Building for Python2...'
    cd "${_srcname}-${pkgver}/python"
    python2 setup.py build
}

# waiting for upstream to finish python3 support
# https://github.com/Netflix/vmaf/issues/128

package() {
    cd "${_srcname}-${pkgver}/python"
    
    python2 setup.py install --root="$pkgdir" --optimize='1'
    
    # vmaf python2 executables
    cd script
    executables=($(find . -type f -executable))
    for _script in ${executables[@]}
    do
        install -D -m755 "$_script" "${pkgdir}/usr/bin/${_script}"
    done
    
    # sureal python2 executable
    cd "${srcdir}/${_srcname}-${pkgver}/sureal/python/script"
    install -D -m755 run_subj.py "${pkgdir}/usr/bin/run_subj.py"
    
    # sureal python2 modules
    cd "${srcdir}/${_srcname}-${pkgver}/sureal/python/src"
    cp -a sureal "${pkgdir}/usr/lib/python2.7/site-packages"
    
    # fix shebang on python2 scripts
    for _script in "$pkgdir"/usr/bin/*
    do
        sed -i '1s/python$/python2/' "$_script"
    done
}
