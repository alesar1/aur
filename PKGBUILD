# Maintainer: Ricardo Vieira <ricardo.vieira@tecnico.ulisboa.pt>

pkgname=budgie-desktop-git
pkgver=v10.5.2.r2.g3d2b8998
pkgrel=1
pkgdesc="Simple GTK3 desktop experience"
arch=('i686' 'x86_64')
url="https://solus-project.com/budgie"
license=('GPLv2')
depends=('gnome-bluetooth' 'gnome-menus' 'gnome-session' 'gnome-themes-standard' 'libpeas' 'libwnck3'
         'mutter' 'accountsservice' 'gnome-desktop' 'libpulse' 'sassc' 'ibus')
makedepends=('meson' 'git' 'gobject-introspection' 'intltool' 'vala' 'gtk-doc')
optdepends=('gnome-backgrounds: Default background'
            'gnome-control-center: System settings'
            'gnome-screensaver: Lock screen'
            'network-manager-applet: Network management')
provides=('budgie-desktop')
conflicts=('budgie-desktop')
source=("$pkgname"::'git+https://github.com/solus-project/budgie-desktop.git')
noextract=()
md5sums=('SKIP')

pkgver() {
        cd "$srcdir/$pkgname"
        git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
        cd "$srcdir/$pkgname"
        git submodule update --init
}

build() {
        cd "$srcdir/$pkgname"
        meson build --prefix=/usr --sysconfdir=/etc --buildtype plain
        ninja -C build
}

package() {
        cd "$srcdir/$pkgname"
        DESTDIR=$pkgdir ninja -C build install
}
