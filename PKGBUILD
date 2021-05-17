# Maintainer: avonder
# Contributor: E5ten

pkgname=mpd-rich-presence-discord-git
_pkgname=mpd-rich-presence-discord
pkgver=r50.ced628d
pkgrel=2
pkgdesc=" Broadcast your MPD state using discord rich presence!"
arch=('x86_64')
url='https://github.com/justas-d/mpd-rich-presence-discord'
license=('MIT')
depends=('libmpdclient' 'gcc-libs' 'discord-rpc-api')
makedepends=('git' 'cmake' 'discord-rpc-api')
source=("git+https://github.com/justas-d/$_pkgname.git")
md5sums=('SKIP')

build() {
	cd $srcdir/$_pkgname
	./build.sh
}

package() {
	cd $srcdir/$_pkgname/release
	mkdir -p $pkgdir/usr/bin
	mkdir -p $pkgdir/usr/lib/systemd/system/
	mkdir -p $pkgdir/usr/lib/systemd/user/
	install -Dm755 mpd_discord_richpresence $pkgdir/usr/bin/
	ln -s /usr/bin/mpd_discord_richpresence $pkgdir/usr/bin/mpd-rpc
	install -Dm644 mpd-discord.service $pkgdir/usr/lib/systemd/system/
	install -Dm644 mpd-discord.service $pkgdir/usr/lib/systemd/user/
}

