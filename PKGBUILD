# Maintainer: Ole Jon Bjørkum <mail at olejon dot net>

pkgname=spotify-stable
pkgver=0.9.17
pkgrel=1
pkgdesc="A proprietary music streaming service."
arch=('x86_64')
url="https://www.spotify.com"
license=('custom:Copyright (c) 2014 Spotify AB')
depends=('binutils' 'desktop-file-utils' 'ffmpeg-compat' 'libxss' 'python2-xdg' 'qt4' 'openssl' 'wget' 'xdg-utils')
conflicts=('spotify' 'spotify094' 'spotify32bit')
install=$pkgname.install
source=('http://repository-origin.spotify.com/pool/non-free/s/spotify/spotify-client-0.9.17_0.9.17.8.gd06432d.31-1_amd64.deb')
md5sums=('69a320368ded33cfcc4e3bb4cc71575c')

package()
{
	mkdir -p $pkgdir/opt
	tar -xf $srcdir/data.tar.xz
	cp -rp $srcdir/opt/spotify /tmp/spotify-stable
}
