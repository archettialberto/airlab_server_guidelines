#!/usr/bin/env bash
#SBATCH --job-name=normal-example
#SBATCH --partition=normal
#SBATCH --nodes=1
#SBATCH --gres=gpu:1
#SBATCH --comment=vram=10G
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=4
#SBATCH --mem=8G
#SBATCH --time=04:00:00
#SBATCH --output=normal-%A_%a.out
set -euo pipefail
# Activate your environment. Replace train.py with your application.
srun python train.py
