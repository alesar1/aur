# Maintainer: Eloy Garcia Almaden <eloy.garcia.pca@gmail.com>
pkgname=buttermanager
pkgver=2.3
pkgrel=1
epoch=
pkgdesc="Graphical tool to create BTRFS snapshots, balance filesystems and upgrade the system safetly"
arch=('x86_64')
url="https://github.com/egara/buttermanager"
license=('GPL')
groups=()
depends=('btrfs-progs' 'python>=3' 'grub-btrfs' 'python-setuptools')
makedepends=('python>=3' 'git')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=('git+https://github.com/egara/buttermanager#branch=master')
noextract=()
md5sums=('SKIP')
validpgpkeys=()

package() {
        cd "$pkgname"
        # Creating destination directory
        install -dm755 "$pkgdir/opt/$pkgname"

        # Installing ButterManager using python-setuptools
        echo -e "\n Installing ButterManager. Please wait..."
        python setup.py install

        # Copying .desktop file and icon
        echo -e \n "Creating desktop icon. Finishing the installation"
        install -Dm644 "$srcdir/$pkgname/packaging/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
        install -Dm644 "$srcdir/$pkgname/packaging/$pkgname.svg" "$pkgdir/opt/$pkgname/gui/$pkgname.svg"
}
