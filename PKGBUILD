# Maintainer: David Birks <david@birks.dev>

pkgname=aws-cli-v2
pkgver=2.0.32
pkgrel=1
pkgdesc='Universal Command Line Interface for Amazon Web Services (version 2)'
arch=('x86_64')
url='https://github.com/aws/aws-cli'
license=('Apache')
provides=('aws-cli')
conflicts=('aws-cli' 'aws-cli-git' 'aws-cli-v2-bin')
makedepends=('python-botocore-v2-git' 'python-colorama' 'python-docutils' 'python-cryptography' 'python-s3transfer' 'python-ruamel-yaml' 'python-prompt_toolkit')
source=("$pkgname-$pkgver.tar.gz::https://github.com/aws/aws-cli/archive/$pkgver.tar.gz")
sha256sums=('b3bf72a9b9b3a2d79fb940678f3467032e70a72e530e986c29d1c83cdf56edfc')

build() {
    cd "$srcdir"/aws-cli-$pkgver
    python setup.py build
}

package() {
    cd "$srcdir"/aws-cli-$pkgver
    python setup.py install --root="$pkgdir"

    install -Dm 644 LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
    install -Dm 644 bin/aws_bash_completer "$pkgdir"/usr/share/bash-completion/completions/aws
}

