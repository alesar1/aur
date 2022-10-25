# Maintainer: Schmetzler domink.wetzel[at]fh-zwickau[dot]de
# Contributor: mnabila nblid48[at]gmail[dot]com

pkgname=jupyterlab-desktop-bin
pkgver=3.4.6
pkgrel=1
pkgdesc="JupyterLab desktop application, based on Electron."

url="https://github.com/jupyterlab/jupyterlab-desktop"
license=("MIT")

arch=('x86_64')
source=("https://github.com/jupyterlab/jupyterlab-desktop/releases/download/v$pkgver-$pkgrel/JupyterLab-Setup-Debian.deb")

md5sums=('99a38c6af8e273bae57a649f1711dea1')

prepare(){
    cd $srcdir
    tar -xf data.tar.xz
}

package() {
    cd $srcdir
    mv usr $pkgdir/
    mv opt $pkgdir/
    mkdir $pkgdir/usr/bin
    ln -s /opt/JupyterLab/jupyterlab-desktop $pkgdir/usr/bin/jlab
}
