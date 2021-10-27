# Maintainer: Librewish <librewish@gmail.com>


pkgbase=lxqt-kcm-integration-extra-git
_gitname=lxqt-kcm-integration-extra
pkgname=(
    'lxqt-kcm-integration-extra-git'
    )
pkgver=r4.8c6e687
pkgrel=1
arch=('any')
_branch='master'
url="https://github.com/librewish/lxqt-kcm-integration-extra"
license=('GPL')
makedepends=('git')
source=("git+$url.git#branch=${_branch}")
sha256sums=('SKIP')

_install() {
    if [[ -d $srcdir/$_gitname/$1/etc ]]; then
        install -d $pkgdir/etc
        cp -rf $srcdir/$_gitname/$1/etc $pkgdir
    fi

    if [[ -d $srcdir/$_gitname/$1/usr ]]; then
        install -d $pkgdir/etc
        cp -rf $srcdir/$_gitname/$1/usr $pkgdir
    fi
    
    if [[ -d $srcdir/$_gitname/$1/skel ]]; then
        install -d $pkgdir/etc
        cp -rf $srcdir/$_gitname/$1/skel $pkgdir/etc
    fi

}

pkgver() {
	cd "$srcdir/lxqt-kcm-integration-extra"

# Git, no tags available
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

package_lxqt-kcm-integration-extra-git() {
    pkgdesc='extra kcm support for lxqt-kwin'
depends=("kde-cli-tools" "kglobalaccel" "kwin" "plasma-workspace")
optdepends=('bluedevil: needed for lxqt-kcm-bluetooth'
            'kde-gtk-config: needed for lxqt-kcm-appearance'
            'kinfocenter: needed for lxqt-kcm-systeminfo'
            'plasma-desktop: needed for lxqt-kcm-appearance colors and styles'
            'kcm-wacomtablet: wacom tablet kcm support'
            'print-manager: printing kcm support'
	    'plymouth-kcm: plymouth kcm support'
	    'sddm-kcm: sddm kcm support'
	    'kdeconnect: kdeconnect kcm support'
	    'plasma-thunderbolt: thunderbolt kcm support'
	    'plasma-firewall: ufw firewall kcm support'
	   )

    provides=('lxqt-kcm-integration-extra' 'lxqt-kcm-integration-git' 'lxqt-kcm-integration')

    _install ''
}

