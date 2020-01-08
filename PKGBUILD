# Maintainer: Alessandro Righi <alerighi4@gmail.com>

pkgname=turingarena-git
pkgver=r531.9351add2
pkgrel=1
pkgdesc="A framework to host programming competitions"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/turingarena/turingarena"
license=('MPL2')
depends=('task-maker-rust')
makedepends=('cargo' 'npm')
optdepends=()
options=()
provides=('turingarena')
conflicts=('turingarena')
source=(
	'git+https://github.com/turingarena/turingarena.git'
	'turingarena.env'
	'turingarena.service'
	'turingarena.sh'
)
sha256sums=(
	'SKIP'
	'108a01fdc4676fe774eec62380271201eef3a573b1458c060e41a403105a5f06'
	'8bd2aa2553adb64dc194fd0668a2038b769fec0609a9ff96bd5c82317f6e112f'
	'1a7ea2fd1d5ed6c70016a184088590c63bfa62e12e6de80d2e4a6ea495ac83ab'
)
install=turingarena-git.install

pkgver() {
	cd "$srcdir/turingarena"
	echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/turingarena"
	cargo build --release --no-default-features
	cd "$srcdir/turingarena/turingarena-web-client/web"
	npm install 
	./prepare.sh
	npm run build
}

package() {
	install -Dm755 "$srcdir/turingarena/target/release/turingarena" "$pkgdir/usr/lib/turingarena/turingarena"
	install -Dm755 "$srcdir/turingarena.sh" "$pkgdir/usr/bin/turingarena"
	install -Dm644 "$srcdir/turingarena.service" "$pkgdir/usr/lib/systemd/system/turingarena.service"
	install -Dm644 "$srcdir/turingarena.env" "$pkgdir/etc/default/turingarena"

	# Since I know nobody will ever bother to do that, I will generate a secret for you!
	echo "SECRET=$(head -c32 /dev/urandom | base64)" >> "$pkgdir/etc/default/turingarena"

	mkdir -p "$pkgdir/usr/share/turingarena"
	cp -r "$srcdir/turingarena/turingarena-web-client/web/dist/turingarena-contest/" "$pkgdir/usr/share/turingarena/web"
}

