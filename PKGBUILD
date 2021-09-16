pkgname=piwigo
pkgver=11.5.0
pkgrel=3
pkgdesc='Photo gallery software for the web'
arch=(any)
url="https://piwigo.org/"
license=("GPL")
depends=('php' 'mariadb' 'php-apache')
optdepends=('php-gd: graphic library (one graphic library is required)'
            'imagemagick: graphic library (one graphic library is required)'
            'exiftool: Write Metadata plugin or any other plugin dealing with EXIF/IPTC metadata'
            'ffmpeg: VideoJS plugin to create video poster'
            'jpegtran: RotateImage plugin to rotate images with no compression'
            'pdftoppm: generate poster from PDF files (instead of ImageMagick)')
makedepends=("unzip")
backup=("etc/webapps/piwigo/apache.conf")
options=(emptydirs)
source=('piwigo.zip::https://piwigo.org/download/dlcounter.php?code=latest'
        'apache.conf'
        'piwigo.perm.sh')
sha256sums=('bfecdd743c62cdb4e1936662178d019af264ea763d26c8c832da836fbe09652d'
            '5810668c0f9e7066a2f63e2c6b6fb5d13b7caa96fed16c882f6da2e7a6766219'
            '0e6d4af6552f4eead62825999eee115152cf5f884f2c65b759379ac5b15d36f7')

package() {
    install_path="${pkgdir}/usr/share/webapps/piwigo"

    cd "${srcdir}"

    # Install main files
    install -d "${install_path}"
    cp -a piwigo/* "${install_path}/"

    # Install apache & nginx conf'
    install -D -m644 apache.conf "${pkgdir}/etc/webapps/piwigo/apache.conf"
}
