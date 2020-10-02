# $Id$
# Maintainer: Popolon <popolon@popolon.org>
# Contributor: Benjamin Robin <dev@benjarobin.fr>
# Contributor: Otto VonStein <otto>

pkgname=pencil2d-mypaint-git
_gitname=pencil2d
pkgver=4505.1fc3f62a
pkgrel=1
pkgdesc="Animation/drawing software, that lets you create traditional hand-drawn animation using both bitmap and vector graphics with mypaint brushes extension testing branch"
arch=('i686' 'x86_64')
url="http://www.pencil2d.org/"
license=('GPL')
depends=('ming' 'ffmpeg' 'qt5-svg' 'qt5-multimedia' 'qt5-xmlpatterns')
makedepends=('git' 'qt5-tools')
provides=('pencil2d')
conflicts=('pencil2d')
options=('!staticlibs')
install=pencil2d.install
source=('pencil2d::git+https://github.com/CandyFace/pencil.git')
md5sums=('SKIP')

pkgver()
{
    cd "${_gitname}"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build()
{
    cd "${_gitname}"
    git checkout implement_mypaint_nobitmapsurface

    msg "Starting qmake..."
    qmake PREFIX=/usr
    msg "Starting make..."
    make
}

package()
{
    cd "${_gitname}"
    make install INSTALL_ROOT="${pkgdir}"
}
