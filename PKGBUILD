# Maintainer: Eris Nihila <sp0t1fyfr33tr1alabus3@outlook.com>
#
#

pkgname=aurtool-git
pkgver=0.4
pkgrel=1
pkgdesc="Minimal aur package management utility written in bash script"
arch=('any')
url="https://www.github.com/m1ndflay3r/aurtool"
license=('GPL-3.0')
depends=(
         'pacman-contrib'
         'm4'
         'gawk'
         'autoconf'
         'automake'
         'findutils'
         'binutils'
         'gettext'
         'bison'
         'sed'
         'file'
         'fakeroot'
         'flex'
         'gcc'
         'grep'
         'groff'
         'gzip'
         'libtool'
         'texinfo'
         'make'
         'pacman'
         'patch'
         'pkgconf'
         'sudo'
         'which'
         'git'
         'package-query'
)
optdepends=(
        'nano: for editing PKGBUILD during install'
        'vim: for editing PKGBUILD during install'
)

package() {
        git clone https://github.com/m1ndflay3r/aurtool aurtool-git
        mv aurtool-git/aurtool .
        mkdir -p "$pkgdir"/usr/bin
        install -m755 aurtool "$pkgdir"/usr/bin/aurtool
}
