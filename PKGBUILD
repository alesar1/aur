# Maintainer: Christoph Gysin <christoph.gysin@gmail.com>

pkgname=(aws-cdk nodejs-aws-cdk)
pkgver=1.54.0
pkgrel=1
pkgdesc="CDK Toolkit, the command line tool for CDK apps"
arch=(any)
url="https://github.com/awslabs/aws-cdk#readme"
license=('Apache')
makedepends=('npm')
source=(http://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz)
sha1sums=('b5da850dfa8c8fdc5df0b7a954ed4c87392d0afc')

package_aws-cdk() {
  depends=('nodejs')
  optdepends=('python: python language support')

  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $pkgname@$pkgver
}

package_nodejs-aws-cdk() {
  depends=(aws-cdk)
}
