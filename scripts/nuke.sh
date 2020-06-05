#!/usr/bin/env bash

# This script removes all transient directories (node_modules and build results)

NUKE_DIRS="node_modules smart-contracts/node_modules 3box/node_modules smart-contracts/build smart-contracts/build/contracts/*.json"

echo "You are about to delete $NUKE_DIRS"
read -n1 -p "Are you sure? Please type 'y': "
echo

# Nuke
case $REPLY in
   y)
   echo "This may take a couple seconds..."
   rm -rf $NUKE_DIRS
   echo "Transient directory removed..."
   ;;
   * )
   echo "Aborting, no directory was removed"
   ;;
esac
