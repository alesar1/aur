# Maintainer: Shane Donohoe <shane@donohoe.cc>

pkgname=python-youtube-sm-parser
pkgver=0.1.0
pkgrel=1
pkgdesc="Output youtube subscriptions using subscription_manager file"
arch=('any')
url="https://github.com/shanedabes/youtube_sm_parser"
license=('APACHE')
depends=('python' 'python-xmltodict' 'python-requests-futures')
source=("$pkgname-$pkgver.tar.gz::https://github.com/shanedabes/youtube_sm_parser/archive/v${pkgver}.tar.gz")
sha256sums=('8f52dfb3d84810be2798019d3f544aebed65177c857714336abbbeced676cbb9')

package() {
    cd "youtube_sm_parser-${pkgver}"
    python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
