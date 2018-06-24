# Maintainer Musikolo <musikolo {at} hotmail [dot] com>

pkgname=stsauth
pkgver=0.1.3
pkgdesc="CLI tool for fetching AWS tokens. Creates a temporary AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY that can be used with cli tools such as awscli, ansible, terraform and more."
pkgrel=2
arch=(any)
url="https://github.com/cshamrick/stsauth"
license=(MIT)
makedepends=(aws-cli python-pip python-boto3 python-beautifulsoup4 python-click python2-configparser python-requests python-requests-ntlm)
depends=(aws-cli python-boto3 python-beautifulsoup4 python-click python2-configparser python-requests python-requests-ntlm)
options=()
source=("git+https://github.com/cshamrick/${pkgname}.git")
md5sums=('SKIP')

package() {
  mkdir -p "${pkgdir}"
  pip install --root="${pkgdir}" ${pkgname}
}
