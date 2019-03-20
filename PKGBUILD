# Maintainer: Que Quotion <quequotion@bugmenot.com>
# Contributor: Michael Healy <horsemanoffaith@gmail.com>
# Contributor: Xiao-Long Chen <chenxiaolong@cxl.epac.to>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: thn81 <root@scrat>
# Contributor: Adria Arrufat <adria DOT arrufat+aur AT protonmail DOT ch>

pkgname=gnome-settings-daemon-elementary
pkgver=3.28.1_0ubuntu1.1_r5.9610af6df
pkgrel=1
pkgdesc="GNOME Settings Daemon (with elementary OS patches)"
url="https://gitlab.gnome.org/GNOME/gnome-settings-daemon"
arch=('i686' 'x86_64')
license=('GPL')
depends=(dconf geoclue2 geocode-glib gnome-desktop 'gsettings-desktop-schemas-ubuntu>=3.24.0'
	gtk3-print-backends libcanberra-pulse libgudev libgweather libnotify librsvg 
	libsystemd libwacom nss pulseaudio pulseaudio-alsa upower)
makedepends=(docbook-xsl git gnome-common intltool libxslt libnm python xf86-input-wacom meson git)
groups=(pantheon)
provides=(gnome-settings-daemon{,-ubuntu}="${pkgver}")
conflicts=(gnome-settings-daemon{,-ubuntu})
source=("git+https://github.com/elementary/os-patches.git#branch=gnome-settings-daemon-bionic-patched"
        "git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git/"
        "notify-notification-close.patch")
sha512sums=('SKIP'
            'SKIP'
            'c17fefa6e70ffbc901c247013f5296738a227fa192027cd5e7e8e086e6bda04773bcd6b61a06a4d2c1b030385ca91d7d02a7fec89eed64eaab02f62906e6a725')

pkgver() {
    cd "os-patches"

    printf "3.28.1_0ubuntu1.1_r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "os-patches"

    #https://gitlab.gnome.org/GNOME/gnome-settings-daemon/commit/3110457f72f70b2d283c1ad2f27b91b95d75d92f
    patch -Np2 < ../notify-notification-close.patch

    git submodule init
    git config --local submodule."subprojects/gvc".url "${srcdir}/libgnome-volume-control"
    git submodule update
}

build() {
    cd "os-patches"

    [ -d build ] && rm -rf build
    arch-meson build -Dstatic-false=true
    ninja -C build
}

package() {
    cd "os-patches"

    DESTDIR="${pkgdir}" ninja -C build install
}
