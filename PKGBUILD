# Maintainer: Rafael Ascensão <rafa dot almas at gmail dot com>
# Contributor: Magnus Therning <magnus@therning.org>

pkgname=git-imerge-git
_pkgname=git-imerge
pkgver=1.1.0.r2.g269969e
pkgrel=1
pkgdesc='Incremental merge for git'
arch=('any')
url='https://github.com/mhagger/git-imerge'
license=('GPL2')
depends=('python2' 'git')
makedepends=('git')
changelog=${pkgname}.changelog
source=('git+https://github.com/mhagger/git-imerge.git')
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long | sed -r 's/^v//; s/([^-]*-g)/r\1/; s/-/./g'
}

package () {
    cd "${srcdir}"/${_pkgname}
    install -D -m755 git-imerge "${pkgdir}"/usr/bin/git-imerge
    install -D -m644 git-imerge.bashcomplete \
            "${pkgdir}"/usr/share/bash-completion/completions/git-imerge
}
