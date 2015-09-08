# Maintainer: Faule Socke <github@socker.lepus.uberspace.de>
# Ex-Maintainer: Jakub Klinkovský <kuba.klinkovsky@gmail.com>
# Contributor: Adlai Chandrasekhar <munchking@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>
# Contributor: Mark Foxwell <fastfret79@archlinux.org.uk>

pkgname=cdm-git
_pkgname="cdm"
pkgver=2014.08.04
pkgrel=1
pkgdesc="The Console Display Manager"
arch=('any')
url="https://github.com/ghost1227/cdm"
license=('GPL')
makedepends=('git')
depends=('dialog' 'xorg-xinit' 'xorg-xdpyinfo' 'kbd')
provides=('cdm')
conflicts=('cdm')
backup=('etc/cdmrc')
source=('git://github.com/ghost1227/cdm.git')
md5sums=('SKIP')
epoch=1

pkgver() {
  cd "$_pkgname"
  git log -1 --format=format:%cd --date=short | sed 's|-|.|g'
}

package() {
  install -d ${pkgdir}/{usr/{bin,share/{doc/cdm,cdm/themes}},etc/profile.d}

  cd "$srcdir/$_pkgname"
  install -Dm644 -T README.md "$pkgdir/usr/share/doc/cdm/README"
  install -Dm644 -t "$pkgdir/usr/share/cdm/themes" themes/*

  cd "$srcdir/$_pkgname/src"
  install -Dm755 -t "$pkgdir/usr/bin" cdm cdm-xlaunch
  install -Dm644 -t "$pkgdir/etc" cdmrc
  install -Dm755 -T profile.sh "$pkgdir/etc/profile.d/zzz-cdm.sh"
}

# vim:set ts=2 sw=2 et:
