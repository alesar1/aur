# Maintainer: Markus Richter <mqus at disroot dot org>

pkgname=bitwarden_rs-vault-git
pkgver=v2.13.1.r0.geaa6bc12
pkgrel=1
pkgdesc="Integrates the Vault Web-Interface into bitwarden_rs."
arch=('any')
url="https://github.com/bitwarden/web"
license=('AGPL3')

# nodejs-lts-dubnium is included because nodejs>=12 doesn't work. otherwise this would be covered by npm.
# python2 is included because the used npm package node-sass depends on node-gyp (and therefore python2) transitively. This should be covered by the official node-gyp package (https://bugs.archlinux.org/task/62277?project=5&string=node-gyp ) which is pulled in by npm.
makedepends=('npm' 'nodejs-lts-dubnium' 'python2' 'git')
depends=('bitwarden_rs')
conflicts=("bitwarden_rs-vault" "bitwarden_rs-vault-bin")
provides=('bitwarden_rs-vault') 
install=bitwarden_rs-vault.install
source=("git+https://github.com/bitwarden/web.git"
	"0001-Set-Vault-BaseURL.patch"
	"${pkgname%-git}.install")
sha512sums=('SKIP'
            'cd4764f1b5ff6dc2a139da3c806d9c51c4c813acedd07afdcb19f483d8363db5f24c843c85525df4b95886e3c7b16432a26463157e53d316ae4633afe863cf7f'
            '0b93ea1a442f15ac2445bc0cb759887b0826215edbc73dabb150de8ac136c8712c18b798ff397a06d50989332562a36382b5b7d962e60c2f2619d0f46cf9b04d')

pkgver() {
        cd "$srcdir/web"
        ( set -o pipefail
            git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
            printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
        )
}

prepare() {
	# patch paths
	cd "$srcdir/web"
	patch -N -p1 -i "$srcdir/0001-Set-Vault-BaseURL.patch" 
}

build() {
	# build vault webinterface
	cd "$srcdir/web"
	npm install --cache "${srcdir}/npm-cache" 
	npm run sub:init --cache "${srcdir}/npm-cache" 
	npm run dist --cache "${srcdir}/npm-cache" 
}

package() {
	# install vault files
	install -d "$pkgdir/usr/share/bitwarden_rs"
	cp -r "$srcdir/web/build" "$pkgdir/usr/share/bitwarden_rs/vault"
}
