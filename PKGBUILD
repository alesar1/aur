# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Maintainer: Horo <horo@yoitsu.moe>

pkgname=parsoid
pkgver=0.10.0
pkgrel=1
pkgdesc="A bidirectional wikitext parser and runtime"
arch=('any')
url="https://www.mediawiki.org/wiki/Parsoid"
license=('GPL2')
depends=('nodejs' 'npm')
makedepends=('git' 'python2')
optdepends=(
    'mediawiki: MediaWiki engine'
)
conflicts=('parsoid-git')
provides=('parsoid')
backup=(usr/share/webapps/parsoid/localsettings.js
	usr/share/webapps/parsoid/config.yaml)
source=("https://github.com/wikimedia/parsoid/archive/v${pkgver}.zip"
        "parsoid.service"
        "parsoid.install"
        "parsoid.sysusers"
        "parsoid.tmpfiles")

options=('!strip')
install="parsoid.install"
prepare() {
    cp -R $srcdir/parsoid-${pkgver} $srcdir/parsoid
}
build() { 
    cd $srcdir/parsoid
    alias python="python2"
    npm install
}
package() {
    mkdir -p "${pkgdir}/usr/share/webapps/${pkgname}"
    cd $srcdir/parsoid
    cp localsettings.example.js localsettings.js    
    cp config.example.yaml config.yaml
    cp -R . "${pkgdir}/usr/share/webapps/${pkgname}/"
    install -Dm644 "${srcdir}/parsoid.service" "${pkgdir}/usr/lib/systemd/system/parsoid.service"
    install -Dm644 "$srcdir"/parsoid.sysusers "$pkgdir"/usr/lib/sysusers.d/parsoid.conf
    install -Dm644 "$srcdir"/parsoid.tmpfiles "$pkgdir"/usr/lib/tmpfiles.d/parsoid.conf
    install -D "COPYING.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

sha512sums=('e7a67fb79a170ac22eea80b3a8fd9bc2a6e34fb88fdb9f5d8ce1c3535ecba84bc3061c53afa6085bf96d1971bbeb76ccc90fa5f7bed2f298b2b8108c2752d79e'
            '3733d08751209fdef134940bbcce48efd0f380e13a8df466a7a1010450857a924aa364628242e4307cf40f4a34e60c1aeb1400d9a5b9fed88b448ed549e4d3f1'
            '70473c30f7d78f40da1ab91c717e012575687e5edde18011d7a8759fc7ad0ad28a20514794a836d855b409a9becb4c779365d72dc3d5dcd62275d05f558876e8'
            '7f2346af222052e2e685d859e0bb7a7c7c9f03988f772856e0888cad299cb3870afdc280feb9e2798e7989d3382f68f689d43a685b466ce9f138edb77b20de3a'
            '6158afa3c276ddb5090166680621b7b9213f3d73b2d1a95181f5441631be039e7d454228d2f214f1411bb7f953475ddbd368e89eaa2288ac200ac666a57a6a99')
