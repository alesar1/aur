# Maintainer: SKBotNL <skbotnl@mailfence.com>

pkgname="multimc-development-bin"
pkgver=0.7.0.develop.3521
pkgrel=1
pkgdesc="A custom launcher for Minecraft that focuses on predictability, long term stability and simplicity."
arch=("x86_64" "i686")
url="https://github.com/MultiMC/Launcher"
license=("Apache License 2.0")
depends=("qt5-base")
provides=("multimc-development")
conflicts=("multimc-development")
source_x86_64=("mmc-develop-lin64-${pkgver}.tar.gz"::"https://files.multimc.org/downloads/mmc-develop-lin64.tar.gz")
source_i686=("mmc-develop-lin32-${pkgver}.tar.gz"::"https://files.multimc.org/downloads/mmc-develop-lin32.tar.gz")
sha256sums_x86_64=('8f567720d6bc502af0f401b992562f2689bf5bea0796a8a0f36a81eed184f2c7')
sha256sums_i686=('8964ecab8a66b79dcd3d20b65209f3dd8f4ae118c192d38263f214458c36e19b')

prepare() {
    echo -e "[Desktop Entry]\nName=MultiMC Development\nVersion=${pkgver//_/-}\nGenericName=Minecraft Launcher\nComment=Free, open source launcher and instance manager for Minecraft.\nType=Application\nTerminal=false\nExec=/usr/bin/multimc-development -d ~/.multimc\nIcon=/usr/lib/multimc-development/multimc.png\nCategories=Game\nKeywords=game;minecraft;" > multimc-development.desktop
    echo -e "Copyright 2012-2021 MultiMC Contributors\nLicensed under the Apache License, Version 2.0 (the \"License\");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License." > LICENSE
    wget -O multimc.png https://avatars2.githubusercontent.com/u/5411890
}

package() {
    mkdir -p  $pkgdir/usr/bin
    mkdir -p  $pkgdir/usr/lib/multimc-development

    install -Dm 644 $srcdir/multimc-development.desktop $pkgdir/usr/share/applications/multimc-development.desktop
    install -Dm 755 $srcdir/multimc.png $pkgdir/usr/lib/multimc-development/multimc.png
    install -Dm 644 $srcdir/LICENSE $pkgdir/usr/share/licenses/multimc-development/LICENSE
    install -Dm 755 $srcdir/MultiMC/MultiMC $pkgdir/usr/lib/multimc-development
    cp -r $srcdir/MultiMC/* $pkgdir/usr/lib/multimc-development
    ln -s /usr/lib/multimc-development/MultiMC $pkgdir/usr/bin/multimc-development
}
