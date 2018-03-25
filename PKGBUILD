# Maintainer: surefire@cryptomile.net

pkgname=sqlectron-gui-git
pkgver=1.29.0+3+gd1eb407
pkgrel=1
pkgdesc="A simple and lightweight SQL client with cross database and platform support"
arch=('x86_64')
url="https://sqlectron.github.io/"
license=('MIT')
depends=('electron')
makedepends=('npm' 'asar' 'git')
conflicts=('sqlectron-gui')
provides=('sqlectron-gui')
source=("${pkgname}::git+https://github.com/sqlectron/sqlectron-gui.git"
        'sqlectron-gui.sh'
		'sqlectron-gui.desktop')

sha1sums=('SKIP'
          'e0e7c83e47f368543a3c4505cf035d570e0d645b'
          'b9fb3bc29a17dee5de9295e2fdb2b3025ed51d1f')

pkgver() {
	cd "${pkgname}"
	git describe --tags --long | sed 's/-/+/g; s/^v//'
}

prepare() {
	cd "${pkgname}"

	# remove extra dependencies
	sed -i package.json \
		-e '/"postinstall":/            d' \
		-e '/"electron":/               d' \
		-e '/"electron-builder":/       d' \
		-e '/"spawn-auto-restart":/     d' \
		-e '/"webpack-dev-middleware":/ d' \
		-e '/"webpack-dev-server":/     d' \
		-e '/"webpack-bundle-analyzer":/ s/,$//'
}

build() {
	cd "${pkgname}"

	npm install --build-from-source
	npm run compile:browser
	npm run compile:renderer

	mkdir app
	mv -t ./app out
	cp -t ./app package.json

	pushd app
	npm install \
		--production \
		--build-from-source \
		--nodedir=/usr/lib/electron/node \
		--runtime=electron \
		--target=$(electron -v) \

	popd
	asar p app app.asar
}

package() {
	cd "${pkgname}"

	install -Dm0755 ../sqlectron-gui.sh "${pkgdir}/usr/bin/sqlectron-gui"

	install -Dm0644 build/app.png "${pkgdir}/usr/share/pixmaps/sqlectron-gui.png"

	install -Dm0644 -t "${pkgdir}/usr/lib/sqlectron-gui" app.asar

	install -Dm0644 -t "${pkgdir}/usr/share/applications"  ../sqlectron-gui.desktop

	install -Dm0644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
}
