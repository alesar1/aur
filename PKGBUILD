# Maintainer: jzbor <zborof at posteo dot de>
pkgname=moonwm
_pkgname=MoonWM
pkgver=7.0.1
pkgrel=3
pkgdesc="My own outstandingly named Window Manager (a dynamic window manager)"
arch=(x86_64 i686)
url="https://github.com/jzbor/moonwm"
license=('MIT')
groups=()
depends=(libx11 libxcb libxinerama slop xmenu xorg-xsetroot  arandr dmenu ffmpeg geoclue i3lock imagemagick libnotify light network-manager-applet notification-daemon otf-nerd-fonts-fira-code pamixer picom polkit-gnome skippy-xd wmname xdotool xfce4-power-manager xorg-setxkbmap xorg-xrandr xorg-xrdb xwallpaper)
makedepends=()
checkdepends=()
optdepends=(\
    'lxappearance: GUI for configuring GTK and icon theme',
    'matcha-gtk-theme: a fitting GTK theme (Matcha-dark-aliz)',
    'numix-circle-icon-theme: an icon theme that fits nicely',
    'redshift: night mode',
    'scrot: integrated screenshot support',
	'xfce4-notifyd: a good default notification-daemon')
provides=(moonwm)
conflicts=(moonwm)
replaces=()
backup=()
options=()
source=("$url/archive/refs/tags/$pkgver.tar.gz")
noextract=()
md5sums=('1681498f236f0b35c75d31a01457d27d')
validpgpkeys=()

build() {
	cd "$_pkgname-$pkgver"
    make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11 FREETYPEINC=/usr/include/freetype2
}

package() {
	cd "$_pkgname-$pkgver"
    make PREFIX=/usr DESTDIR="${pkgdir}" install install-scripts
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/moonwm/LICENSE"
    install -Dm644 README.md "${pkgdir}/usr/share/doc/moonwm/README.md"
}


