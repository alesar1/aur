# Maintainer: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Jonas Heinrich <onny@project-insanity.org>

pkgname=onlyoffice-documentserver
pkgver=5.3.1
pkgrel=1
pkgdesc="Online office suite comprising viewers and editors for texts, spreadsheets and presentations"
arch=('any')
url="https://github.com/ONLYOFFICE/DocumentServer"
depends=('nodejs' 'noto-fonts')
# noto-fonts required due to bug https://github.com/ONLYOFFICE/DocumentServer/issues/377#issuecomment-455782913
makedepends=('npm' 'nodejs' 'grunt-cli' 'qt5-base' 'git' 'wget' 'p7zip' 'clang' 'python2' 'java-runtime' 'svn' 'ncurses5-compat-libs')
# ncurses-5compat-libs required to build v8
optdepends=('rabbitmq' 'redis' 'postgresql')
license=('AGPL')
source=("https://github.com/ONLYOFFICE/DocumentServer/archive/ONLYOFFICE-DocumentServer-${pkgver}.tar.gz"
	"core-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/core/archive/35bd2803a423cce81ef737106ad630466d8609b0.tar.gz"
	"core-fonts-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/core-fonts/archive/ea34b02b1234ea9c4fb68e2a95fd2d689b5ab2dd.tar.gz"
	"dictionaries-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/dictionaries/archive/ad92cbf2bbe05eec2df06e1e892ae78cec9f6b88.tar.gz"
	"sdkjs-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/sdkjs/archive/c9838809a66dd1e375af20e96e92ff4016ac83fc.tar.gz"
	"sdkjs-plugins-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/sdkjs-plugins/archive/9d9ec220b26212892bc8b257adf4460290d31513.tar.gz"
	"server-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/server/archive/7db900bdc9506862798b20a3b5556fcc9be53708.tar.gz"
	"web-apps-pro-${pkgver}.tar.gz::https://github.com/ONLYOFFICE/web-apps-pro/archive/b8ecbaf73515b5b994528a9bd0150b9482461805.tar.gz"
	"server_makefile.patch"
	"onlyoffice-fileconverter.service"
	"onlyoffice-spellchecker.service"
	"onlyoffice-docservice.service"
	"onlyoffice-documentserver.hook"
	"onlyoffice-documentserver.sysusers"
	"onlyoffice-documentserver.tmpfiles")
sha512sums=('6459e780b713b757b7a55ddacae515c4f9339b586be7fd73b23b28b92e72dc9173a6854ef7e6935f63a35737d629910315225f00fc27f01cc840e653b95b5d9b'
            'fdb3d248a6058e97b33a75aa26df4feb9f6b20954925dfc4835affa5b7cf9fc3850218f68cb3e42b503ec5de6e2b9c63668a3c0eef9052d3f0a12971d38c5482'
            '3d79a57aba908f362fb244fc05436d13a8611812545d9f790e4c92baede29cfecd56fab7b2d65d8e136a422f34a4475ec0154016cc96c7387da317e1a39999a1'
            'b6b6756c15420c1ee1df700bcded2884bb9a952fc2221d783f2e1a2f1224e32856324937a95521bb3c07755ee6c50f5fe928a9dfbd74fff0581a847947caf33c'
            'e301c2e4013c096f3010bd35c746209f8e3c469fe700db5b96e03aa68b7eb6481ec35e9f3f143751832633b8bfe62cf85ba819f47e8cbc000ae6a2f45176a0cd'
            '94e93256186bf29ec24f91036eb1ae21d4795712f105080974c44b9f233bb8c0ed17921e6cdfa27c68fe2e0bcbc313b1bcea39ed815b43b22fdc441c4459b536'
            'f351aba1675256ddd5867e5a5df0cbaea3dc85479cbe8c255275098b27456693d9641700db2c3870f608d444b3b083cf04bd669f338e24e9d4b068ef50c16c94'
            '1af625d70c77a0a00d321c4d4ec7420669f3b854feb50cd0cef9b1c380701a69dc7cbc143f6418737563083015b6351faffaa6cb17cda1a12c8d04bbb0d57bda'
            'b80098617889cabfb991419855da9c859d1c5874236fdb5106562dc6cfd8db76530d99fb63c56e2a0f46bf847226ed824956533a6478926f7d0aa48eb243eff1'
            'f6e888d23d980eb50dcd70c1ce82324f3ee60c666298f77adf7f7abdf524d78bfcd10a8e17180a64596d964d98ae5457645ece6e3d05d93b938f465f2dc3612a'
            '8ed8c1301469242cc669a1f0520708ad0fa4f19406541c976cd9287917f573ec3f47902f9021eef5ff82ca20de04234f459e4826320689705772589b1aca0267'
            'fafee1aa872786116d5c28c08dbe12edcf0dd60890c40b108bb60c9d321d9a579fc8fe6a8a86c1641b58531388410fb51e09d294b9b998ca9a39373349e889a0'
            '707da287c3db6907fcdbf91cfe2ef057c77033713a1b4299a89a684b37fe3c74644e2c0b1fcec2afcd81c6511bb02ac3221d56c8caadb5d0c711d1842f78e780'
            'c7c23c5a7014e3251dfd86312d1d1e5c2d88f26ddc5aa967285202fd3ebf62c0a10c009b1cc5ad1b78e13fa0bc2eda515616d8af02325db434c0b2113c5b1ecb'
            'e1b8395ab7ef219860aebe9e7709a60cbaea1c28a8378aac3f54ce37b39944a7fd82b7efa8d59977f0891743cdface149b9f95f4b25c1c5322cb327c50d485ed')
backup=('etc/webapps/onlyoffice/documentserver/production-linux.json'
	'etc/webapps/onlyoffice/documentserver/default.json')

prepare() {
  # Unfortunately, v8 depot_tools still requires python2
  mkdir -p path
  ln -sf /usr/bin/python2 path/python

  cd "${srcdir}"
  rm *.tar.gz

  cd "${srcdir}/DocumentServer-ONLYOFFICE-DocumentServer-${pkgver}"
  rm -r core core-fonts dictionaries sdkjs sdkjs-plugins server web-apps-pro
  mv ../core-fonts* core-fonts
  mv ../core-* core
  mv ../dictionaries-* dictionaries
  mv ../sdkjs-plugins-* sdkjs-plugins
  mv ../sdkjs-* sdkjs
  mv ../server-* server
  mv ../web-apps-pro* web-apps-pro

  # Use clang instead of gcc because of compile errors
  sed -i 's/is_clang=false/is_clang=true/g' core/Common/3dParty/v8/build.sh

  # python2 dependency for gclient
  sed -i '13iexport PATH="'${srcdir}'/path:$PATH"' core/Common/3dParty/v8/fetch.sh
  sed -i '29iexport PATH="'${srcdir}'/path:$PATH"' core/Common/3dParty/v8/build.sh

  # Patching Makefile to include DESTDIR variable
  patch -p0 -i ../server_makefile.patch

  # Patching configuration file
  sed -i 's/\/var\/www\/onlyoffice/\/usr\/share\/webapps\/onlyoffice/g' server/Common/config/production-linux.json
  sed -i 's/\/etc\/onlyoffice/\/etc\/webapps\/onlyoffice/g' server/Common/config/production-linux.json
}

build() {
  cd "${srcdir}/DocumentServer-ONLYOFFICE-DocumentServer-${pkgver}"

  # workaround bug https://github.com/ONLYOFFICE/onlyoffice-owncloud/issues/42
  export PRODUCT_VERSION=${pkgver}

  # Download & build third party modules 
  cd core/Common/3dParty
  ./make.sh

  # Building core
  cd ../..
  make

  # Building sdkjs
  cd ../sdkjs
  make

  # Building server
  cd ../server
  make 
}

package() {
  cd "${srcdir}/DocumentServer-ONLYOFFICE-DocumentServer-${pkgver}/server"
  install -Dm 644 "${srcdir}/onlyoffice-docservice.service" "${pkgdir}/usr/lib/systemd/system/onlyoffice-docservice.service"
  install -Dm 644 "${srcdir}/onlyoffice-fileconverter.service" "${pkgdir}/usr/lib/systemd/system/onlyoffice-fileconverter.service"
  install -Dm 644 "${srcdir}/onlyoffice-spellchecker.service" "${pkgdir}/usr/lib/systemd/system/onlyoffice-spellchecker.service"
  install -D "${srcdir}/onlyoffice-documentserver.hook" "${pkgdir}/usr/share/libalpm/hooks/onlyoffice-documentserver.hook"
  install -Dm 644 "${srcdir}/onlyoffice-documentserver.sysusers" "${pkgdir}/usr/lib/sysusers.d/onlyoffice-documentserver.conf"
  install -Dm 644 "${srcdir}/onlyoffice-documentserver.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/onlyoffice-documentserver.conf"
  make DOCUMENT_ROOT="/usr/share/webapps/onlyoffice/documentserver" DESTDIR=${pkgdir} install
}
