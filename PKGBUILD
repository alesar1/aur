# Maintainer: Steve Engledow <steve@engledow.me>
pkgname=aws-cli-v2-bin
pkgver=2.0.34
pkgrel=2
pkgdesc='Universal Command Line Interface for Amazon Web Services version 2'
arch=('i686' 'x86_64')
url='https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html'
license=('Apache')
provides=('aws-cli' 'aws-cli-v2')
conflicts=('aws-cli' 'aws-cli-v2')
makedepends=('unzip')
depends=('less')
source=(
    "$pkgname-$pkgver.zip::https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip"
    # on hold until the AWS CLI team publish their key
    # See https://github.com/aws/aws-cli/issues/4942
    # 'https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip.sig'
)
#validpgpkeys=('FB5DB77FD5C118B80511ADA8A6310ACC4672475C')
sha256sums=(
    '81716e3ed7748b7dd821c67ea840501784b4aa46a3f03b4366bd90dd082f626b'
)

package() {
  $srcdir/aws/install -i "$pkgdir/usr/share/aws-cli" -b "$pkgdir/usr/bin" >/dev/null

  # Fix symlinks
  BIN_DIR="/usr/share/aws-cli/v2/current/bin"
  for i in $pkgdir/$BIN_DIR/*; do
    ln -sf "$BIN_DIR/$(basename $i)" "$pkgdir/usr/bin/"
  done

  # Fix symlink for current version
  rm "$pkgdir/usr/share/aws-cli/v2/current"
  ln -s "/usr/share/aws-cli/v2/$pkgver" "$pkgdir/usr/share/aws-cli/v2/current"
}
