# Maintainer: Vincent.Ducamps <aur@ducamps.win>
pkgname=gnome-shell-extension-pop-shell-git
pkgdesc="Pop Shell - Tiling window management in Gnome (WIP)"
pkgver=r552.0fce7eb
pkgrel=3
_gitorg=pop-os
_gitname=shell
_gitbranch=master_focal
arch=(any)
url="https://github.com/pop-os/shell"
license=("GPLv3")
install="pop-shell.install"
conflicts=("gnome-shell-extension-pop-shell")
makedepends=("typescript" "git")
depends=("gnome-shell" "pop-shell-shortcuts-git")


_dir="${_gitname}"
source=("${_dir}::git+https://github.com/${_gitorg}/${_gitname}.git#branch=${_gitbranch}")
sha256sums=("SKIP")


pkgver() {
    cd "${srcdir}/${_dir}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}


build() {
    cd "${srcdir}/${_dir}"
    make all
}


package() {
    cd "${srcdir}/${_dir}"
    make DESTDIR="${pkgdir}/" install
    install -Dm755 scripts/configure.sh "${pkgdir}/usr/share/gnome-shell/extensions/pop-shell@system76.com/scripts/configure.sh"
}

