# Maintainer: Joan Figueras <ffigue at gmail dot com>
# Contributor: Black_Codec <orso.f.regna@gmail.com>

pkgname=guacamole-server
pkgver=1.4.0
pkgrel=4
pkgdesc="Guacamole proxy daemon"
arch=('i686' 'x86_64' 'armv7h')
url="http://guacamole.sourceforge.net/"
license=('GPL3')
replaces=('guacd' 'libguac' 'libguac-client-ssh' 'libguac-client-vnc' 'libguac-client-rdp')
depends=('pango' 'openssl' 'libvorbis' 'libwebp' 'ffmpeg4.4')
makedepends=('libpulse' 'libvorbis' 'openssl' 'libssh' 'libvncserver' 'pango' 'libtelnet')
optdepends=('libssh: for ssh protocol support'
'libvncserver: for vnc protocol support'
'freerdp: for rdp protocol support'
'libpulse: for pulseaudio support'
'libtelnet: for telnet protocol support'
'monospace: any monospace font such as terminus-font, ttf-inconsolata or ttf-fira-mono. Without it, SSH will not work'
'libwebsockets: Support for Kubernetes'
)
install=$pkgname.install

source=("http://apache.org/dyn/closer.cgi?action=download&filename=guacamole/${pkgver}/source/${pkgname}-${pkgver}.tar.gz"
        "guacd.conf"
        "https://github.com/apache/guacamole-server/commit/bc6b5cef25cb2c66cb4e0e96df6d2639a61a197a.patch"
        "https://github.com/apache/guacamole-server/commit/9c93337d9781d4d85d84d9442297a2013c492837.patch"
        "https://github.com/apache/guacamole-server/commit/f84db7d166fb76f33b879ae297a1899a12b80b57.patch")

backup=('etc/guacamole/guacd.conf')

md5sums=('b17c6152e96af0488ca4c0608e5ec3ae'
         'ab0ac97ad76d16be73768f89abb6ee7e'
         'bd58fffb01f7f6ab9bae306bdbea61ea'
         '5010a8a2982c4ce5453c5a5c8d0a6845'
         '6f9cfb4adce7628b7b5c1dc747934946')

prepare() {
	cd "$srcdir"/$pkgname-$pkgver
	# guacenc doesn't work since ffmpeg 4.4 (av_init_packet() is deprecated) so, we apply this patch
	# Reference: https://github.com/apache/guacamole-server/pull/352/commits/bc6b5cef25cb2c66cb4e0e96df6d2639a61a197a
	patch -Np1 -i ../bc6b5cef25cb2c66cb4e0e96df6d2639a61a197a.patch

	# Fix OpenSSL warnings
	patch -Np1 -i ../9c93337d9781d4d85d84d9442297a2013c492837.patch
	patch -Np1 -i ../f84db7d166fb76f33b879ae297a1899a12b80b57.patch
}

build() {
	cd "$srcdir"/$pkgname-$pkgver
	export PKG_CONFIG_PATH='/usr/lib/ffmpeg4.4/pkgconfig'
	#./configure --prefix=/usr --sbindir=/usr/bin --with-systemd-dir=/usr/lib/systemd/system CPPFLAGS="-Wno-error=pedantic -Wno-error=deprecated-declarations"
	./configure --prefix=/usr --sbindir=/usr/bin --with-systemd-dir=/usr/lib/systemd/system CPPFLAGS="-Wno-error=pedantic"
	make
}
 
package() {
	cd "$srcdir"/$pkgname-$pkgver
	make DESTDIR="$pkgdir" install
	mkdir -p "$pkgdir"/etc/guacamole
	cp -f ../guacd.conf "$pkgdir"/etc/guacamole/
}
