# Maintainer: Joaquin <joaquingc123 at gmail dot com>
# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Contributor: Dies <JerryCasiano(at)gmail(dot)com>
# Contributor: Joeny Ang <ang(dot)joeny(at)gmail(dot)com>
# Contributor: Guan 'kuno' Qing <neokuno(at)gmail(dot)com>
# Contributor: Guten Ye <ywzhaifei(at)gmail(dot)com>
# Contributor: i_magnific0 <i_magnific0(at)yahoo(dot)com>
# Contributor: Pavlo <pavlofreemen(at)gmail(dot)com>

pkgname=font-manager
pkgver=0.8.5
pkgrel=2
pkgdesc='A simple font management application for GTK+ Desktop Environments'
url='https://fontmanager.github.io'
arch=('x86_64' 'i686')
license=('GPL')
depends=('gtk3'
         'json-glib'
         'libsoup'
         'libxml2'
         'sqlite'
         'webkit2gtk')
optdepends=('file-roller')
makedepends=('gobject-introspection'
             'intltool'
             'libxml2'
             'meson'
             'nautilus'
             'ninja'
             'vala'
             'yelp-tools')
source=("https://github.com/FontManager/master/releases/download/$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('80b9c8ec8cd9b859b8216be8d7ba988d27b0e155d9a4afc71fcd850eebc56701')

build() {
    arch-meson "$pkgname-$pkgver" build \
        -Dnautilus=true \
        -Dreproducible=true
    ninja -C build
}

package() {
    DESTDIR="$pkgdir" ninja -C build install
}
