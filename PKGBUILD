# Maintainer : Daniel Bermond < gmail-com: danielbermond >

pkgbase=confu-git
pkgname=('confu-git' 'confu2-git')
_srcname=confu
pkgver=r41.5030e44
pkgrel=2
pkgdesc='Cross-platform C/C++ configuration system (git version, uses python3)'
arch=('any')
url='https://github.com/Maratyszcza/confu/'
license=('MIT')
makedepends=(
    # official repositories
        'git'
        'python' 'python-setuptools' 'python-sphinx' 'python-sphinx_rtd_theme' 'python-yaml'
        'python2' 'python2-setuptools' 'python2-sphinx' 'python2-sphinx_rtd_theme' 'python2-yaml'
    # AUR:
        'python-ninja-syntax' 'python2-ninja-syntax'
)
source=('git+https://github.com/Maratyszcza/confu.git')
sha256sums=('SKIP')

prepare() {
    cp -a "$_srcname" "${_srcname}-py2"
}

pkgver() {
    cd "$_srcname"
    
    # git, no tags available
    printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    printf '%s\n' '  -> Building for Python3...'
    cd "${_srcname}"
    python setup.py build
    python setup.py build_sphinx --all-files --source-dir="${srcdir}/${_srcname}/sphinx"
    
    printf '%s\n' '  -> Building for Python2...'
    cd "${srcdir}/${_srcname}-py2"
    python2 setup.py build
    python2 setup.py build_sphinx --all-files --source-dir="${srcdir}/${_srcname}-py2/sphinx"
}

package_confu-git() {
    depends=(
        # binary repositories:
            'python' 'python-six' 'python-yaml'
        # AUR:
            'python-ninja-syntax'
    )
    
    cd "$_srcname"
    python setup.py install --root="$pkgdir" --optimize=1
    
    # doc
    mkdir -p "${pkgdir}/usr/share/doc/${pkgname}"
    cp -a "${srcdir}/${_srcname}/build/sphinx/html/"* "${pkgdir}/usr/share/doc/${pkgname}"
    
    # license
    mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

package_confu2-git() {
    pkgdesc='Cross-platform C/C++ configuration system (git version, uses python2)'
    depends=(
        # binary repositories:
            'python2' 'python2-six' 'python2-yaml'
        # AUR:
            'python2-ninja-syntax'
    )
    
    cd "${_srcname}-py2"
    python2 setup.py install --root="$pkgdir" --optimize=1
    mv "${pkgdir}/usr/bin/confu" "${pkgdir}/usr/bin/confu2"
    
    # fix wrong python versions
    sed -i '1s/python$/python2/' "${pkgdir}/usr/lib/python2.7/site-packages/confu/recipes/"*.py
    
    # doc
    mkdir -p "${pkgdir}/usr/share/doc/${pkgname}"
    cp -a "${srcdir}/${_srcname}-py2/build/sphinx/html/"* "${pkgdir}/usr/share/doc/${pkgname}"
    
    # license
    mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
