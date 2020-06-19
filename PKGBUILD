# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=nodejs-sword-interface
_npmname=${pkgname/js}
pkgver=0.141.0
pkgrel=2
pkgdesc='Javascript (N-API) interface to SWORD library'
arch=('x86_64')
url="https://github.com/tobias-klein/$_npmname"
license=('GPL3')
depends=('nodejs' 'nodejs-addon-api')
makedepends=('jq' 'node-gyp' 'moreutils' 'npm' 'python' 'sword-svn>=r3747') # Remove python when node-gyp package fixed
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('380e45d55c01d1175cfb9960a1050c22d0871f151460d03b8d1f0410e9ef2564')

prepare() {
    cd "$_npmname-$pkgver"
    # Suppress install or link against this package triggering a build!
    jq 'del(.scripts[])' package.json | sponge package.json
}

build() {
    cd "$_npmname-$pkgver"
    npm pack
}

package() {
    cd "$_npmname-$pkgver"
    export LINK_SYSTEM_SWORD=1
    npm install --production -g --user root --cache "$srcdir/npm-cache" --prefix "$pkgdir/usr" $_npmname-$pkgver.tgz
    rm -rf "$pkgdir/usr/lib/node_modules/$_npmname/"{node_modules,sword_build,*.tgz,build/{node_modules,sword_build}}

    # Use system provided deps
    pushd "$pkgdir/usr/lib/node_modules/$_npmname/" && ls -sf /usr/lib/node_modules
    pushd ../build && ls -sf /usr/lib/node_modules

    find "$pkgdir"/usr -type d -exec chmod 755 {} +
    find "$pkgdir" -type f -name package.json \
        -execdir sh -c "jq '. |= with_entries(select(.key | test(\"_.+\") | not))' {} | sponge {}" \;
    chown -R root:root "$pkgdir"
}
