# Maintainer: Michael Dobachesky <mgdobachesky@outlook.com>

_pkg_name="maint"
_install_dir="opt/$_pkg_name"
_symlink_dir="usr/bin"

pkgname="$_pkg_name"
pkgver=1.2
pkgrel=1
pkgdesc="A utility to automatically perform Arch Linux system maintenance"
arch=('x86_64')
url="https://gitlab.com/mgdobachesky/ArchSystemMaintenance"
license=('GPLv3')
depends=('python' 
         'python-xmltodict' 
         'python-dateutil' 
         'sed' 
         'awk'
         'duplicity'
         'reflector' 
         'rmlint'
         'pacman-contrib' 
         'pacutils'
         'vim')
backup=("$_install_dir/settings.sh")

source=("https://gitlab.com/mgdobachesky/ArchSystemMaintenance/raw/master/pkg/$pkgname-$pkgver.tar.xz")

md5sums=('c891b6df920c4b75087dffa2e103106a')

build() {
    umask 022
    mkdir -p "$_install_dir"
    mkdir -p "$_symlink_dir"

    sed -i "s|{{PKG_PATH}}|/${_install_dir}|" "run.sh"

    install -m 755 "run.sh" "$_install_dir"
    install -m 755 "archNews.py" "$_install_dir"
    install -m 755 "settings.sh" "$_install_dir"
}

package() {
    install_base=$(echo "$_install_dir" | cut -d '/' -f 1)
    symlink_base=$(echo "$_symlink_dir" | cut -d '/' -f 1)

    cp -r "$install_base" "$pkgdir"
    cp -r "$symlink_base" "$pkgdir"
    ln -s "/$_install_dir/run.sh" "$pkgdir/$_symlink_dir/$pkgname"
}
