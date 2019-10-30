# Maintainer: Chris Billington <chrisjbillington@gmail.com>
# Contributor: Philip Goto <philip.goto@gmail.com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgbase=yaru-git
pkgname=(yaru-sound-theme-git
         yaru-gtk-theme-git
         yaru-gnome-shell-theme-git
         yaru-icon-theme-git
         yaru-session-git)
pkgver=19.10.4.r34.g2d2cf90a
pkgrel=2
pkgdesc="Yaru default ubuntu theme"
arch=(any)
url="https://github.com/ubuntu/yaru"
license=('GPL3')
makedepends=(meson sassc git)
options=('!strip' '!buildflags' 'staticlibs')
source=("git+https://github.com/ubuntu/yaru")
sha256sums=('SKIP')

pkgver() {
    cd yaru
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    arch-meson yaru build
    ninja -C build
}

_delete_all_from_pkgdir_except() {
    if [[ "$1" != "sound-theme" ]]; then
        rm -r "${pkgdir}"/usr/share/sounds
    fi
    if [[ "$1" != "gtk-theme" ]]; then
        rm -r "${pkgdir}"/usr/share/themes/Yaru{-light,{,-dark}/{gtk-*,index.theme}}
    fi
    if [[ "$1" != "gnome-shell-theme" ]]; then
        rm -r "${pkgdir}"/usr/share/themes/Yaru{,-dark}/gnome-shell
    fi
    if [[ "$1" != "icon-theme" ]]; then
        rm -r "${pkgdir}"/usr/share/icons
    fi
    if [[ "$1" != "session" ]]; then
        rm -r "${pkgdir}"/usr/share/{gnome-shell,glib-2.0,xsessions,wayland-sessions}
    fi
    # Delete remaining empty directories:
    find "${pkgdir}" -type d -empty -delete
}

package_yaru-sound-theme-git() {
    pkgdesc="Yaru default ubuntu sound theme"
    provides=(yaru-sound-theme)
    conflicts=(yaru-sound-theme)

    DESTDIR="$pkgdir" ninja -C build install 2>&1 >> install.log
    _delete_all_from_pkgdir_except "sound-theme"
}

package_yaru-gtk-theme-git() {
    pkgdesc="Yaru default ubuntu gtk theme"  
    depends=(gtk3 gdk-pixbuf2 gtk-engine-murrine gnome-themes-extra)
    provides=(yaru-gtk-theme)
    conflicts=(yaru-gtk-theme)
    
    DESTDIR="$pkgdir" ninja -C build install 2>&1 >> install.log
    _delete_all_from_pkgdir_except "gtk-theme"
}

package_yaru-gnome-shell-theme-git() {
    pkgdesc="Yaru default ubuntu gnome shell theme"  
    depends=(gnome-shell)
    provides=(yaru-gnome-shell-theme)
    conflicts=(yaru-gnome-shell-theme)
    
    DESTDIR="$pkgdir" ninja -C build install 2>&1 >> install.log
    _delete_all_from_pkgdir_except "gnome-shell-theme"
}

package_yaru-icon-theme-git() {
    pkgdesc="Yaru default ubuntu icon theme"  
    depends=(hicolor-icon-theme gtk-update-icon-cache librsvg)
    provides=(yaru-icon-theme)
    conflicts=(yaru-icon-theme)

    DESTDIR="$pkgdir" ninja -C build install 2>&1 >> install.log
    _delete_all_from_pkgdir_except "icon-theme"
}

package_yaru-session-git() {
    pkgdesc="Yaru session"
    depends=(gnome-shell yaru-gnome-shell-theme)
    provides=(yaru-session)
    conflicts=(yaru-session)

    DESTDIR="$pkgdir" ninja -C build install 2>&1 >> install.log
    _delete_all_from_pkgdir_except "session"
}
