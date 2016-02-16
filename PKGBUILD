# Maintainer: Pekman
# PKGBUILD Based in Iceweasel-bin

# We're getting this from Debian Stable (Jessie)

_debname=iceweasel
_debver=38.6.1esr
_debrel=1~deb8u1
_debrepo=http://security.debian.org/debian-security/pool/updates/main/i/

pkgname=iceweasel-stable-bin
pkgver=${_debver}.deb${_debrel}
pkgrel=1
pkgdesc="Debian Stable (Jessie) Browser based on Mozilla Firefox (bin version)"
arch=('i686' 'x86_64')
url="https://packages.debian.org/jessie/iceweasel"
license=('MPL' 'GPL' 'LGPL')
conflicts=("$_debname")
provides=("$_debname"="$_debver")

depends=('gtk2' 'icu' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types' 'dbus-glib' 'alsa-lib' 'libnotify' 'desktop-file-utils' 'hicolor-icon-theme' 'libvpx' 'libevent' 'nss' 'hunspell' 'sqlite')

optdepends=('iceweasel-sync: Speed up Iceweasel using tmpfs'
	    'mozplugger: A Mozilla & Firefox multimedia plugin.'
	    'mozilla-searchplugins: extra search plugins'
	    'iceweasel-extension-archsearch: Iceweasel Arch search engines (AUR, Pkgs, BBS, Wiki, etc.)'
            'iceweasel-extension-archforumsearch-it: Iceweasel search engines for Arch Linux Italian forum'
	    'gst-libav: h.264 video'
	    'gst-plugins-good: h.264 video'
	    'networkmanager: Location detection via available WiFi networks')

install=iceweasel.install

 if [ "$CARCH" = "x86_64" ]; then
    _debarch=amd64
    sha256sums=('e998c499a33abb034cace55659a3eb4b099381da3d6d165da68fea1e13d617b2')
else
    _debarch=i386
    sha256sums=('4404ab3dfddc8a6ea5c5a2816e7ae7be7d906c69e0a41b4f5982067cefefdec2')
 fi

source=("${_debrepo}/${_debname}/${_debname}_${_debver}-${_debrel}_${_debarch}.deb")

package(){
      msg2 "Installing Iceweasel..."
      tar Jxvf "${srcdir}"/data.tar.xz -C "$pkgdir"/

      msg2 "Cleaning up unwanted files..."
      rm -rv "${pkgdir}"/usr/lib/{mozilla,mime}
      rm -rv "${pkgdir}"/usr/share/{bug,mozilla,doc}
      rm -v "${pkgdir}"/usr/bin/firefox
}

# vim:set ts=2 sw=2 et:
