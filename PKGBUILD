# Maintainer: jzbor <zborof at posteo dot de>
pkgname=moonwm
pkgver=7.2.0
_wmcname=wmcommons
_wmcver=0.1.0
pkgrel=2
pkgdesc="My own outstandingly named Window Manager (a dynamic window manager)"
arch=(x86_64 i686)
url="https://github.com/jzbor/moonwm"
_wmcurl="https://github.com/jzbor/wmcommons"
license=('MIT')
groups=()
depends=(libx11 libxcb libxinerama slop xmenu  arandr dmenu ffmpeg geoclue i3lock imagemagick libnotify light network-manager-applet notification-daemon otf-nerd-fonts-fira-code pamixer picom polkit-gnome sound-theme-freedesktop xfce4-power-manager xorg-setxkbmap xorg-xrandr xorg-xrdb xwallpaper)
makedepends=()
checkdepends=()
optdepends=( 'lxappearance: GUI for configuring GTK and icon theme'
    'matcha-gtk-theme: a fitting GTK theme (Matcha-dark-aliz)'
    'numix-circle-icon-theme: an icon theme that fits nicely'
    'redshift: night mode'
    'scrot: integrated screenshot support'
	'xfce4-notifyd: a good default notification-daemon')
# ' - this is somehow required for vim syntax hl to work
provides=(moonwm)
conflicts=(moonwm)
replaces=()
backup=()
options=()
source=("$pkgname-$pkgver.tar.gz::https://codeload.github.com/jzbor/moonwm/tar.gz/refs/tags/$pkgver"
        "$_wmcname-$_wmcver.tar.gz::https://codeload.github.com/jzbor/wmcommons/tar.gz/refs/tags/$_wmcver")
noextract=()
sha256sums=('7b486810c5b7568c0f7d46ae2c461f009545f9a4e42333390e9c76fc82502a13'
    'a55fffefac7f960c2f93c1d7070c98a358920d758a177aefee993f755bb763cd')
validpgpkeys=()

build() {
    cp -rv "$_wmcname-$_wmcver/src" "$pkgname-$pkgver/$_wmcname/"
    cp -rv "$_wmcname-$_wmcver/scripts" "$pkgname-$pkgver/$_wmcname/"
	cd "$pkgname-$pkgver"
    make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11 FREETYPEINC=/usr/include/freetype2
}

package() {
	cd "$pkgname-$pkgver"
    make PREFIX=/usr DESTDIR="${pkgdir}" install install-scripts
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/moonwm/LICENSE"
    install -Dm644 README.md "${pkgdir}/usr/share/doc/moonwm/README.md"
}


