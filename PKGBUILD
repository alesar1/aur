# Maintainer: Matthew McGinn <mamcgi@gmail.com>
# Contributor: Felipe F. Tonello <eu@felipetonello.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# TODO: support Toast

pkgbase=bitbake
pkgname=('bitbake' 'bitbake-vim')
_github_url="https://github.com/openembedded/bitbake"
pkgver=1.42.0
pkgrel=1
_pythonver=3.7
pkgdesc='Build tool executing tasks and managing metadata.'
arch=('any')
url='https://www.openembedded.org/wiki/Main_Page'
license=('GPL2')
makedepends=('git')
source=("https://github.com/openembedded/bitbake/archive/${pkgver}.tar.gz")
md5sums=('326096fd76cb950231d5a76a8c13ad3f')

check() {
    cd ${pkgbase}-${pkgver}/bin
    PYTHONPATH="${srcdir}/${pkgbase}-${pkgver}/lib" python ./bitbake-selftest
}

package_bitbake() {
    depends=(
        'python'
        'python-beautifulsoup4'
        'python-codegen'
        'python-django18'
        'python-ply'
        'python-progressbar'
        'python-pyinotify'
        'python-simplediff'
    )
    install=bitbake.install

    cd ${pkgbase}-${pkgver}

    install -d "${pkgdir}/usr/bin"
    install bin/bitbake* "${pkgdir}/usr/bin"

    install -d "${pkgdir}/usr/lib/python${_pythonver}/site-packages"
    cp -Ra lib/bb "${pkgdir}/usr/lib/python${_pythonver}/site-packages"
    cp -Ra lib/prserv "${pkgdir}/usr/lib/python${_pythonver}/site-packages"

    install -d "${pkgdir}/usr/share/man/man1"
    install doc/bitbake.1 "${pkgdir}/usr/share/man/man1"
}

package_bitbake-vim() {
    cd ${pkgbase}-${pkgver}

    install -d "${pkgdir}/usr/share"
    cp -Ra contrib/vim "${pkgdir}/usr/share"
}
